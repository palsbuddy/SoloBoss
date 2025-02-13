export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      expenses: {
        Row: {
          id: string
          user_id: string
          amount: number
          description: string
          category: string
          date: string
          receipt_url: string | null
          hmrc_category: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          description: string
          category: string
          date: string
          receipt_url?: string | null
          hmrc_category: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          description?: string
          category?: string
          date?: string
          receipt_url?: string | null
          hmrc_category?: string
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          user_id: string
          invoice_number: string
          client_name: string
          amount: number
          status: string
          due_date: string
          issued_date: string
          paid_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          invoice_number: string
          client_name: string
          amount: number
          status: string
          due_date: string
          issued_date: string
          paid_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          invoice_number?: string
          client_name?: string
          amount?: number
          status?: string
          due_date?: string
          issued_date?: string
          paid_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      mileage_logs: {
        Row: {
          id: string
          user_id: string
          start_location: string
          end_location: string
          distance: number
          purpose: string
          date: string
          vehicle_type: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          start_location: string
          end_location: string
          distance: number
          purpose: string
          date: string
          vehicle_type: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          start_location?: string
          end_location?: string
          distance?: number
          purpose?: string
          date?: string
          vehicle_type?: string
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          business_name: string | null
          vat_number: string | null
          tax_reference: string | null
          subscription_tier: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          business_name?: string | null
          vat_number?: string | null
          tax_reference?: string | null
          subscription_tier?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          business_name?: string | null
          vat_number?: string | null
          tax_reference?: string | null
          subscription_tier?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}