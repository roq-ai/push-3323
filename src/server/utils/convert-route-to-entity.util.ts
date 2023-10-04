const mapping: Record<string, string> = {
  customers: 'customer',
  owners: 'owner',
  services: 'service',
  startups: 'startup',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
