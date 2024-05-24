import "server-only";

import { cache } from "react";

import { createClient } from "~/lib/supabase/server";

export const getAllProductGroups = cache(async () => {
  const supabase = createClient();
  return (await supabase.from("product_groups").select()).data ?? [];
});

// export const preloadLeafNode = (id: string | null) => {
//   void getLeafNode(id);
// };

export const getLeafNode = cache(async (slug: string) => {
  const supabase = createClient();
  const childNodes =
    (
      await supabase
        .from("menu_nodes_matview")
        .select("*")
        .eq("slug", slug)
        .order("pos", { ascending: true })
    ).data?.[0]?.child_nodes ?? [];
  return childNodes;
});

export const getMenuNodes = cache(async () => {
  const supabase = createClient();
  return (
    (
      await supabase
        .from("menu_nodes_matview")
        .select()
        .order("pos", { ascending: true })
    ).data ?? []
  );
});

export const getCustomerProductPrices = cache(async (customerId: string) => {
  const supabase = createClient();
  const res =
    (
      await supabase
        .from("customers")
        .select("product_prices")
        .eq("id", customerId)
    ).data ?? [];
  if (res.length > 0) {
    return res[0]?.product_prices;
  }
  return [];
});