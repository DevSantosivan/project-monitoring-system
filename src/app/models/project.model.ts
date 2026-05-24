export type ProjectStatus =
  | 'APPROVED'
  | 'ON PROCESS'
  | 'DELAYED'
  | 'WITH ISSUES';

export interface Project {
  id: string;
  contractName: string;
  contractor: string;
  engineer: string;
  coordinator: string;

  progress: number;

  status?: ProjectStatus;

  targetDate: string;

  delayReason?: string;

  revisions?: string[];
  coc?: boolean;
  fcir?: boolean;
  asbuilt?: boolean;
}
