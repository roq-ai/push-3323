interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Administrator', 'End User', 'Guest User'],
  tenantName: 'Startup',
  applicationName: 'Push',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage your customer information',
    'View available services',
    'Book services',
    'View startup information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage startup information',
    'Manage service information',
    'Manage team member information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/02dc10f1-6943-4d1c-b0e8-c0bb4f449534',
};
