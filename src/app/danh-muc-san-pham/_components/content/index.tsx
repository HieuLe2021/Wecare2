import Image from "next/image";
import { createClient } from "@lib/supabase/server";

import type { Tables } from "~/lib/supabase/types";
import { vndFormatter } from "~/utils/vndFormatter";
import { getAllProductGroups, getLeafNode } from "../../utils";
import { LeafCarousel } from "../leaf-carousel";
import { Topbar } from "../topbar";
import { PriceTable } from "./PriceTable";

export type DefaultProductListContentProps = {
  params: { level1Slug?: string; level2Slug?: string };
  searchParams: { groups?: string };
};
export const Content = async ({
  params,
  searchParams,
}: DefaultProductListContentProps) => {
  const supabase = createClient();
  const allProductGroups = await getAllProductGroups();
  const childNodes = await getLeafNode(
    params.level2Slug ?? params.level1Slug ?? "",
  );

  const productsBySlug = (slug: string) => {
    return supabase
      .from("products")
      .select("*")
      .eq("product_group_slug", slug)
      .order("id", { ascending: true });
  };
  const selectedGroups = searchParams.groups?.split(",");
  const groups = searchParams.groups
    ? childNodes.filter((x) => selectedGroups?.includes(x.slug!))
    : childNodes;
  const priceTablesQuery = await Promise.all(
    groups.map((node) => {
      return productsBySlug(node.slug!);
    }),
  );

  return (
    <>
      <Topbar
        allProductGroups={allProductGroups}
        leafCount={childNodes.length}
      />

      <div className="p-4">
        <LeafCarousel data={childNodes} />

        {priceTablesQuery.map((query, index) => {
          const products = query.data ?? [];
          // if (products.length === 0) return null;
          const groupedByChatLieu: Record<string, Tables<"products">[]> = {};
          products.forEach((product) => {
            const { chat_lieu } = product;
            const chatLieu = chat_lieu ?? "unknown";
            if (!groupedByChatLieu[chatLieu]) {
              groupedByChatLieu[chatLieu] = [];
            }
            groupedByChatLieu[chatLieu]!.push(product);
          });

          const prices = products.map((i) => i.gia ?? 0);
          const priceMin = Math.min(...prices);
          const priceMax = Math.max(...prices);

          const data = groups[index]!;
          return (
            <div key={data.id} className="mb-4 rounded-lg bg-white p-4">
              <div className="flex gap-4 pb-4 text-xs leading-4 text-gray-800 bg-blend-normal max-md:flex-wrap">
                <Image
                  loading="lazy"
                  src={data.image_url || "https://placehold.co/600x400/png"}
                  className="aspect-square shrink-0"
                  alt={data.name!}
                  width={120}
                  height={120}
                />
                <div className="">
                  <p className="text-sx cursor-pointer pb-1 text-blue-500 underline underline-offset-1">
                    Băng keo
                  </p>
                  <h6 className="text-base font-semibold">
                    {data.name ?? "Đang cập nhật"}
                  </h6>
                  <div className="self-start text-sm max-md:max-w-full">
                    Siêu thị công nghiệp Wecare chuyên cung cấp sản phẩm đa dạng
                    mẫu mã, phục vụ đa ngành nghề. Giá cả cạnh tranh, đảm bảo
                    trải nghiệm khách hàng tốt nhất.
                  </div>
                  <div className="pt-2 text-base text-red-500">
                    {vndFormatter.format(priceMin)} -{" "}
                    {vndFormatter.format(priceMax)}
                  </div>
                </div>
              </div>
              <div className="mb-1 h-[1px] w-full border border-b border-dashed"></div>
              {Object.entries(groupedByChatLieu).map(([key, value]) => {
                return <PriceTable material={key} key={index} data={value} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};