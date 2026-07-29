import { AnnouncementConfig, AnnouncementConfigSchema } from './schema';

const announcementConfigData: AnnouncementConfig = {
  enabled: true,
  message: 'Complimentary Express Concierge Delivery on Orders Over Rp 5.000.000',
  cta: {
    label: 'Explore Collection',
    href: '/collections',
  },
  priority: 1,
  dismissible: true,
};

export const ANNOUNCEMENT_CONFIG: AnnouncementConfig = AnnouncementConfigSchema.parse(announcementConfigData);
