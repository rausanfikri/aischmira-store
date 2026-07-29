import { CompanyConfig, CompanyConfigSchema } from './schema';

const companyConfigData: CompanyConfig = {
  legalName: 'PT AISCHMIRA FLAGSHIP STORE',
  registrationCountry: 'Indonesia',
  taxIdPlaceholder: 'NPWP 00.000.000.0-000.000',
  aboutSummary: 'AISCHMIRA is an editorial, calm, and luxury fashion flagship experience crafted for modern women.',
};

export const COMPANY_CONFIG: CompanyConfig = CompanyConfigSchema.parse(companyConfigData);
