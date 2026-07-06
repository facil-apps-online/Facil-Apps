import { useQuery } from '@tanstack/react-query';
import { coreSupabase } from '@/lib/supabaseClient';

export type AppStatus = 'production' | 'development' | 'planning';

export interface PlatformCategoryTranslation {
  locale: string;
  name: string;
}

export interface PlatformCategory {
  id: string;
  slug: string;
  platform_category_translations: PlatformCategoryTranslation[] | null;
}

export interface PublicPlatform {
  id: string;
  name: string;
  slug: string;
  status: AppStatus;
  description: string | null;
  description_en: string | null;
  base_url: string | null;
  logo_url: string | null;
  social_facebook: string | null;
  social_instagram: string | null;
  display_order: number;
  category_id: string | null;
  platform_categories: PlatformCategory | null;
}

const fetchPublicPlatforms = async (): Promise<PublicPlatform[]> => {
  const { data, error } = await coreSupabase.functions.invoke<PublicPlatform[]>('public-actions', {
    body: { action: 'get_public_platforms' },
  });

  if (error) {
    throw new Error(`Error fetching public platforms: ${error.message}`);
  }

  return data ?? [];
};

export const usePublicPlatforms = () => {
  return useQuery<PublicPlatform[], Error>({
    queryKey: ['publicPlatforms'],
    queryFn: fetchPublicPlatforms,
    staleTime: 1000 * 60 * 5,
  });
};
