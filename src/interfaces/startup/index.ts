import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StartupInterface {
  id?: string;
  description?: string;
  founded_date?: any;
  industry?: string;
  location?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    service?: number;
  };
}

export interface StartupGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  industry?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
