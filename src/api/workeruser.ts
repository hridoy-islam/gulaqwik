// import axios from 'axios';
import type { User, BillingType } from './authentication';

const base = 'https://gula-api-test-2i55x.ondigitalocean.app/workeruser/';

export const searchWorkerUsers = async (search: any): Promise<WorkerUserPaginated> => {
  // return (await axios.post<WorkerUserPaginated>(base + 'search', search)).data;
  return await (await fetch(base + 'search', { method: 'POST', body: JSON.stringify(search), headers: { 'Content-type': 'application/json; charset=UTF-8' } })).json();
}

export const gethWorkerUserByIdOrSlug = async (idOrSlug: string): Promise<WorkerUser> => {
  return await (await fetch(base + idOrSlug)).json();
}


export interface WorkerUser extends User {
  phoneIsWhatsapp: boolean;
  slug: string;
  skin: string;
  hairColor: string;
  eyeColor: string;
  height: number;
  weight: number;
  averageScore: number;
  billingType: BillingType;
  activeProfile: boolean;
  visitorCounter: number;
  privatePlace: boolean;
  rankings?: IRating[];
  goHome: boolean;
  hotel: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  hourlyRate: string;
  scheduleMin: string;
  scheduleMax: string;
  shortDescription: string;
  description: string;
  categories?: [];
  mediaForValidate?: string[];
  media?: string[];
  mediaVIP?: string[];
  instagram?: string;
  // states: StateWorkerUser[];
  verifiedProfile: boolean;
  price: number;
  acceptCard: boolean;
  publishedProfileByWorkerUser: boolean;
  coverPageMobile: string;
  coverPagePC: string;
  favoriteOfWorkerUser?: WorkerUser[];
  favoriteOfCustomer?: User[];
  alarm?: any;
  prevSlug: string;
  phonePrev: string;
}

export interface WorkerUserPaginated {
  totalCount: number;
  results: WorkerUser[];
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface AddCounter {
  id: string;
  type: string;
  customerId: string;
  billingType: BillingType;
}

export interface IRating {
  id?: string;
  worker?: string;
  createdBy: string;
  createdAt?: string;
  createdByName?: string;
  createdByProfileImg?: string;
  description: string;
  score: number;
  date?: string;
  comments?: IComment[];
}


export interface IEditedReview {
  id: string;
  score: number;
  description: string;
}

export interface IComment {
  id: string;
  userId: string;
  profileImg: string;
  username: string;
  message: string;
  createdAt?: string;
}

export interface IStar {
  value: number;
  selected: boolean;
}

export interface SearchWorkerUser {
  billingType: BillingType;
  sex: 'female' | 'male' | 'trans';
  province: string;
  neighborhood: string;
  skin: string;
  hairColor: string;
  eyeColor: string;
  ageMin: string;
  ageMax: string;
  priceMin: number;
  priceMax: number;
  heightMin: number;
  heightMax: number;
  weightMin: number;
  weightMax: number;
  textContains: string;
  privatePlace: boolean;
  goHome: boolean;
  hotel: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  acceptCard: boolean;
  attendMan: boolean;
  attendWomen: boolean;
  attendTrans: boolean;
  attendCouples: boolean;
  companion: boolean;
  pasive: boolean;
  active: boolean;
  kisses: boolean;
  threesomes: boolean;
  orgies: boolean;
  rains: boolean;
  sado: boolean;
  feet: boolean;
  fisting: boolean;
  anal: boolean;
  vaginal: boolean;
  toys: boolean;
  massages: boolean;
  freeTermination: boolean;
  changingRoles: boolean;
  lingerie: boolean;
  skip: number;
  limit: number;
  sortBy: string;
  sortIn: 'ASC' | 'DESC';
  showDeleted: boolean;
}

export interface ICatalogueCard {
  id: string;
  slug: string;
  sex: string;
  image: string;
  name: string;
  description: string;
  isFavorite: boolean;
}

export interface AddCommentToRanking {
  idRanking: string;
  message: string;
}

export interface RemoveCommentToRanking {
  idRanking: string;
  idComment: string;
}

export interface Alarm {
  location: string;
  time: string;
  contactName: string;
  contactPhone: string;
  text: string;
  active: boolean;
  timezone?: number;
}
