import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { Database } from '../database.types';

export function useSupabaseQuery<T>(
  query: () => Promise<{ data: T | null; error: Error | null }>,
  deps: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const { data, error } = await query();
        
        if (!isMounted) return;

        if (error) {
          setError(error);
          setData(null);
        } else {
          setData(data);
          setError(null);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err as Error);
        setData(null);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, error, loading };
}

export function useUser() {
  const [user, setUser] = useState(supabase.auth.getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(supabase.auth.getUser());
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}