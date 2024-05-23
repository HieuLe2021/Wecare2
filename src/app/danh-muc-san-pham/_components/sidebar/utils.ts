import type { MenuItem } from "@component/categories/mega-menu/type";
import type { Tables } from "@lib/supabase/types";

import { DANH_MUC_SAN_PHAM_URL } from "../../config";

export function getCollections(
  productGroupsList: Tables<"product_groups">[],
  customerId: string | null,
): MenuItem[] {
  const menuItems = productGroupsList
    .filter((group) => !group.parent_id && group.name)
    .map((root) => {
      const level_1 = productGroupsList
        .filter((child) => child.parent_id === root.id)
        .map((child) => {
          const level_2 = productGroupsList
            .filter((grandChild) => grandChild.parent_id === child.id)
            .map((grandChild) => {
              const grandChildItem = {
                title: grandChild.name,
                href:
                  "/" +
                  DANH_MUC_SAN_PHAM_URL +
                  "/" +
                  root.slug +
                  "/" +
                  child.slug +
                  (customerId ? `?customer=${customerId}&` : "?") +
                  "groups=" +
                  grandChild.slug,
                imgUrl: grandChild.image_url,
              };
              return grandChildItem;
            });

          const href =
            level_2.length === 0
              ? "/" +
                DANH_MUC_SAN_PHAM_URL +
                "/" +
                root.slug +
                "?groups=" +
                child.slug
              : "/" +
                DANH_MUC_SAN_PHAM_URL +
                "/" +
                root.slug +
                "/" +
                child.slug +
                (customerId ? `?customer=${customerId}` : "");
          const childItem = {
            title: child.name,
            href,
            subCategories: level_2,
          };
          return childItem;
        });

      let count = 0;
      level_1.forEach((x) => {
        if (x.subCategories.length === 0) {
          count += 1;
        } else {
          count += x.subCategories.length;
        }
      });

      const menuItem: MenuItem = {
        icon: "laptop",
        href:
          "/" +
          DANH_MUC_SAN_PHAM_URL +
          "/" +
          root.slug +
          (customerId ? `?customer=${customerId}` : ""),
        title: root.name || "",
        count: count,
        ...(level_1.length > 0
          ? { menuComponent: "MegaMenu1", menuData: { categories: level_1 } }
          : { menuComponent: "MegaMenu2", menuData: [] }),
      };
      return menuItem;
    });

  return menuItems;
}
