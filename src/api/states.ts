import type { WorkerUser } from "./workeruser";

const base = 'https://gula-api-test-2i55x.ondigitalocean.app/state';

export const searchStates = async (sex?: 'male' | 'female' | 'trans', skip: number = 0, limit: number = 40): Promise<StatePaginated> => {
  return await (await fetch(base + '?skip=' + skip + '&limit=' + limit + (sex ? ('&sex=' + sex) : ''))).json();
}

export interface StatePaginated {
  totalCount: number;
  results: StateWorkerUser[];
  sex?: string;
}

export interface StateWorkerUser {
  id?: string;
  text: string;
  media: string[];
  sex: string;
  createdAt?: string;
  location?: string;
  statesOf: WorkerUser[];
  mediaFromGallery: boolean;
  likeIt: ILikeIt[];
  comments: IStateComment[];
}

export interface ILikeIt {
  id: string;
  userId: string;
  userType: string;
  createdAt: string;
}

export interface AddCommentToState {
  idState: string;
  text: string;
}

export interface UpdateCommentToState {
  idState: string;
  id: string;
  text: string;
}

export interface UpdateState {
  text: string;
  media: string[];
}

export interface RemoveCommentToState {
  idState: string;
  idComment: string;
}

export interface NewMediaContent {
  name: string; media: string; fromGallery: boolean;
}

export interface IWallState {
  id: string;
  userId: string;
  userType: string;
  userSlug: string;
  userSex: string;
  profileImg: string;
  username: string;
  description: string;
  media?: string[];
  createdAt: string;
  likes: ILikeIt[];
  commentsData: ICommentsOutput;
}

export interface ICommentsOutput {
  idState: string;
  cretedById: string;
  customerLogged: boolean;
  comments: IStateComment[];
}

export interface IStateComment {
  id: string;
  userId: string;
  userSlug: string;
  profileImg: string;
  username: string;
  message: string;
  userType: string;
  activeProfile: boolean;
  publishedProfileByWorkerUser: boolean;
  likeIt: ILikeIt[];
  createdAt?: string;
  responses: IStateCommentAnswer[];
}

export interface IStateCommentAnswer {
  id: string;
  userType: 'workeruser' | 'customer';
  userId: string;
  stateId: string;
  commentId: string;
  username: string;
  createdAt: string;
  text: string;
  profileImg: string;
  likeIt?: any[];
}