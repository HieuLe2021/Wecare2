export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      customer_products: {
        Row: {
          customerid: string | null
          don_vi: string | null
          gia: number | null
          hieu_luc_toi_ngay: string | null
          id: number
          last_synced: string
          productid: string | null
        }
        Insert: {
          customerid?: string | null
          don_vi?: string | null
          gia?: number | null
          hieu_luc_toi_ngay?: string | null
          id?: number
          last_synced?: string
          productid?: string | null
        }
        Update: {
          customerid?: string | null
          don_vi?: string | null
          gia?: number | null
          hieu_luc_toi_ngay?: string | null
          id?: number
          last_synced?: string
          productid?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          last_synced: string | null
          name: string | null
          nganh_nghe: string | null
          sdt: string | null
        }
        Insert: {
          id: string
          last_synced?: string | null
          name?: string | null
          nganh_nghe?: string | null
          sdt?: string | null
        }
        Update: {
          id?: string
          last_synced?: string | null
          name?: string | null
          nganh_nghe?: string | null
          sdt?: string | null
        }
        Relationships: []
      }
      menu_nodes: {
        Row: {
          child_nodes:
            | Database["public"]["CompositeTypes"]["node_info"][]
            | null
          id: string
          image: string | null
          name: string | null
          pos: number | null
        }
        Insert: {
          child_nodes?:
            | Database["public"]["CompositeTypes"]["node_info"][]
            | null
          id: string
          image?: string | null
          name?: string | null
          pos?: number | null
        }
        Update: {
          child_nodes?:
            | Database["public"]["CompositeTypes"]["node_info"][]
            | null
          id?: string
          image?: string | null
          name?: string | null
          pos?: number | null
        }
        Relationships: []
      }
      product_groups: {
        Row: {
          id: string
          image_url: string | null
          is_leaf: boolean | null
          last_synced: string
          level: number | null
          name: string | null
          nganh_nghe: string | null
          parent_id: string | null
          pos: number | null
        }
        Insert: {
          id?: string
          image_url?: string | null
          is_leaf?: boolean | null
          last_synced?: string
          level?: number | null
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
          pos?: number | null
        }
        Update: {
          id?: string
          image_url?: string | null
          is_leaf?: boolean | null
          last_synced?: string
          level?: number | null
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
          pos?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          chat_lieu: string | null
          don_vi: string | null
          gia: number | null
          hoan_thien: string | null
          id: string
          last_synced: string
          product_group_id: string | null
          quy_cach: string | null
          ten_sp: string | null
          thuong_hieu: string | null
        }
        Insert: {
          chat_lieu?: string | null
          don_vi?: string | null
          gia?: number | null
          hoan_thien?: string | null
          id?: string
          last_synced?: string
          product_group_id?: string | null
          quy_cach?: string | null
          ten_sp?: string | null
          thuong_hieu?: string | null
        }
        Update: {
          chat_lieu?: string | null
          don_vi?: string | null
          gia?: number | null
          hoan_thien?: string | null
          id?: string
          last_synced?: string
          product_group_id?: string | null
          quy_cach?: string | null
          ten_sp?: string | null
          thuong_hieu?: string | null
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          createdAt: string
          currentHashedRefreshToken: string | null
          email: string
          id: number
          isGuest: boolean
          name: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          currentHashedRefreshToken?: string | null
          email: string
          id?: number
          isGuest?: boolean
          name?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          currentHashedRefreshToken?: string | null
          email?: string
          id?: number
          isGuest?: boolean
          name?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      product_groups_with_children: {
        Row: {
          children: Json[] | null
          id: string | null
          image_url: string | null
          json_products: Json[] | null
          name: string | null
          nganh_nghe: string | null
          parent_id: string | null
        }
        Insert: {
          children?: never
          id?: string | null
          image_url?: string | null
          json_products?: never
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
        }
        Update: {
          children?: never
          id?: string | null
          image_url?: string | null
          json_products?: never
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
        }
        Relationships: []
      }
      product_groups_with_products: {
        Row: {
          id: string | null
          image_url: string | null
          json_products: Json[] | null
          name: string | null
          nganh_nghe: string | null
          parent_id: string | null
        }
        Insert: {
          id?: string | null
          image_url?: string | null
          json_products?: never
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
        }
        Update: {
          id?: string | null
          image_url?: string | null
          json_products?: never
          name?: string | null
          nganh_nghe?: string | null
          parent_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      menu_item: {
        id: number | null
        name: string | null
        icon: string | null
      }
      menu_level2: {
        id: number | null
        name: string | null
        icon: string | null
        children: Database["public"]["CompositeTypes"]["menu_level3"][] | null
      }
      menu_level3: {
        id: number | null
        name: string | null
        icon: string | null
        children: Database["public"]["CompositeTypes"]["menu_level4"][] | null
      }
      menu_level4: {
        id: number | null
        name: string | null
        icon: string | null
      }
      node_info: {
        image_url: string
        id: string | null
        name: string | null
        image_url: string | null
        pos: number | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
