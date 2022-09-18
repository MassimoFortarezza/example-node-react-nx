import CompaniesDB from './companies.json';

export type CompanyTable = {
  name: string;
  city: string;
  id: string;
  specialities: string[];
};

export default CompaniesDB as CompanyTable[];
