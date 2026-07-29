import { ContactConfig, ContactConfigSchema } from './schema';

const contactConfigData: ContactConfig = {
  whatsapp: '6285121344848',
  whatsappLink: 'https://wa.me/6285121344848',
  email: 'concierge@aischmira.store',
  instagram: 'https://instagram.com/aischmira',
  tiktok: 'https://tiktok.com/@aischmira',
  shopee: 'https://shopee.co.id/aischmira',
  tokopedia: 'https://tokopedia.com/aischmira',
  address: 'Jakarta, Indonesia',
  businessHours: 'Mon - Sun, 09:00 - 21:00 WIB',
  customerServiceMessage: 'Hello AISCHMIRA Concierge, I would like to inquire about:',
};

export const CONTACT_CONFIG: ContactConfig = ContactConfigSchema.parse(contactConfigData);
