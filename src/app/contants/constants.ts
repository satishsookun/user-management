import {DepartmentModel, OccupationModel} from '../models/user.model';

export const DEPARTMENTS: DepartmentModel[] = [
  {name: 'Information Technology', slug: 'it'},
  {name: 'Human Resource', slug: 'hr'},
  {name: 'Quality Assurance', slug: 'qa'},
  {name: 'Production', slug: 'prod'},
];

export const OCCUPATIONS: OccupationModel[] = [
  {name: 'Front-End Developer', slug: 'it'},
  {name: 'Back-End Developer', slug: 'it'},
  {name: 'Web Designer', slug: 'it'},
  {name: 'Human Resource', slug: 'hr'},
  {name: 'Assistant HR', slug: 'hr'},
  {name: 'Quality Assurance', slug: 'qa'},
  {name: 'Lead Web Integrator', slug: 'prod'},
  {name: 'Web Integrator', slug: 'prod'},
];

