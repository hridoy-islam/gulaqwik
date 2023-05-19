import type { WorkerUser } from './workeruser';

export type UserIntersection = WorkerUser & Customer;

export interface User {
  type: 'workeruser' | 'customer';
  id: string;
  name: string;
  sex: string;
  dob: string;
  phone: string;
  credits: number;
  currentCountry: string;
  currentNeighborhood: string;
  currentProvince: string;
  profileImg: string;
  favorites: WorkerUser[];
  complaints: any[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  notifications?: NotificationModel[];
  gifts?: any[];
}

export interface NotificationModel {
  type: string;
  mainUserId: string;
  externalId: string;
  secondaryExternalId: string;
  tertiaryExternalId: string;
  viewed: boolean;
  workeruser: string;
  customer: string;
  createdBy: string;
  createdByType: string;
  createdAt: string;
  createdAtFormatted?: string;
  createdByProfileImg: string;
  createdByName: string;
}

export interface Customer extends User {
  preferredSex: string;
}

export type BillingType = 'Premium' | 'Vip' | 'Elite';

export interface LoginPayload {
  emailOrPhone: string;
  password: string;
  recaptchaResponse: string;
  remember?: boolean;
}

export interface SigninPayload {
  type: string;
  name: string;
  dob: string;
  sex: string;
  phone: string;
  currentProvince: string;
  password: string;
  confirmPassword: string;
  recaptchaResponse: string;
  identificationDocument: string;
}

export interface RecoverAccountPayload {
  emailOrPhone: string;
  recaptchaResponse: string;
}

export interface RecoverPasswordTokenPayload {
  newPassword: string;
  newPasswordConfirmation: string;
  token: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface SigninResponse {
  phoneValidation: boolean;
  toLoginPage: boolean;
}

export interface ActivateRegistrationPhonePayload {
  phone: string;
  validationCode: string;
  recaptchaResponse: string;
}

export interface SignupNotificationNotSentPayload {
  phone: string;
  recaptchaResponse: string;
}

export interface ActivateRegistrationPhonePasswordPayload {
  phone: string;
  validationCode: number;
  recaptchaResponse: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface GetUserDataPayload {
  id: string;
  type: string;
}

export interface GetUserDataResponse {
  profileImg: string;
  type: string;
  name: string;
}
