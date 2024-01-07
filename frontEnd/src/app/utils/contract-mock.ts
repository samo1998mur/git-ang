import { Contract } from '../models/contract.model';
import { dateCreator } from './utils';

export const MOCK_CONTRACTS: Contract[] = [
  {
    id: 1,
    state: 'live',
    category: 'Education',
    expiresAt: dateCreator({ seconds: 20 }),
  }
];