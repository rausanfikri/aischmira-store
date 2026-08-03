import { SavedLookEntity, SavedLookDetail, SupportedOccasion } from '@/domain/look';
import { ProductService, productService } from './product.service';
import { Result, success } from '@/shared/types/Result';
import { AppError } from '@/shared/errors';

export class SavedLooksService {
  constructor(private readonly productSvc: ProductService = productService) {}

  private readonly mockLooks: SavedLookEntity[] = [
    {
      id: 'look_101',
      slug: 'midnight-soiree-assembly',
      name: 'The Midnight Soirée Assembly',
      season: 'Autumn / Winter 2026',
      occasion: 'Formal',
      coverImage: '/images/products/bianca-dress.jpg',
      colorPalette: ['#0A0A0A', '#FDFBF7', '#1E293B'],
      description: 'An evening ensemble combining fluid Mulberry silk drape with sharp tailored proportions.',
      productSkus: ['BIANCA-SILK-DRESS', 'PRISCILA-BLAZER'],
      itemCount: 2,
      totalEstimatedValue: 9600000,
    },
    {
      id: 'look_102',
      slug: 'atelier-power-tailoring',
      name: 'Atelier Power Tailoring Ensemble',
      season: 'Resort 2026',
      occasion: 'Office',
      coverImage: '/images/products/priscila-blazer.jpg',
      colorPalette: ['#FDFBF7', '#0A0A0A', '#D4AF37'],
      description: 'Clean architectural lines paired with wide-leg trousers for modern executive presence.',
      productSkus: ['PRISCILA-BLAZER', 'SAFIRA-TROUSERS'],
      itemCount: 2,
      totalEstimatedValue: 8600000,
    },
    {
      id: 'look_103',
      slug: 'resort-sanctuary-look',
      name: 'Resort Sanctuary Monochromatic Look',
      season: 'Spring / Summer 2026',
      occasion: 'Travel',
      coverImage: '/images/products/safira-trousers.jpg',
      colorPalette: ['#F5F5F0', '#E2E8F0', '#94A3B8'],
      description: 'Lightweight fluid drape designed for private villa retreats and coastal travel.',
      productSkus: ['SAFIRA-TROUSERS', 'BIANCA-SILK-DRESS'],
      itemCount: 2,
      totalEstimatedValue: 8700000,
    },
    {
      id: 'look_104',
      slug: 'she-couture-ensemble',
      name: 'The SHE Couture Ensemble',
      season: 'Spring / Summer 2026',
      occasion: 'Formal',
      coverImage: '/images/products/she-dress/she-dress-hero-white-01.jpg',
      colorPalette: ['#FFFFFF', '#000000', '#8B0000'],
      description: 'A striking vintage-inspired silhouette featuring a fitted basque waist, puff sleeves, and sweeping gathered skirt.',
      productSkus: ['SHE-001', 'BNC-001'],
      itemCount: 2,
      totalEstimatedValue: 9800000,
    },
  ];

  public async getSavedLooks(): Promise<Result<SavedLookEntity[], AppError>> {
    return success(this.mockLooks);
  }

  public async getLookBySlug(slug: string): Promise<Result<SavedLookEntity | null, AppError>> {
    const look = this.mockLooks.find((l) => l.slug === slug || l.id === slug);
    return success(look || null);
  }

  public async getLooksByOccasion(occasion: SupportedOccasion): Promise<Result<SavedLookEntity[], AppError>> {
    const filtered = this.mockLooks.filter((l) => l.occasion === occasion);
    return success(filtered);
  }

  public async getLookDetails(slug: string): Promise<Result<SavedLookDetail | null, AppError>> {
    const lookRes = await this.getLookBySlug(slug);
    if (!lookRes.isSuccess || !lookRes.value) return success(null);

    const lookEntity = lookRes.value;
    const productsRes = await this.productSvc.getProducts();
    if (!productsRes.isSuccess) return productsRes;

    const allProducts = productsRes.value;
    const matchingProducts = allProducts.filter((p) =>
      lookEntity.productSkus.some((sku) => p.sku === sku || (p as unknown as { id?: string }).id === sku)
    );

    const detail: SavedLookDetail = {
      ...lookEntity,
      products: matchingProducts.length > 0 ? matchingProducts : allProducts.slice(0, 2),
      outfitStory:
        'Curated during private flagship showroom consultations, this outfit combines structured atelier tailoring with fluid silk movement.',
      stylingNotes:
        'Pair the Mulberry silk dress with minimal gold jewelry and structured tailored blazers for seamless transition from day consultations to evening galas.',
    };

    return success(detail);
  }
}

export const savedLooksService = new SavedLooksService();
