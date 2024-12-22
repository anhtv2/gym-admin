export default {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
  },
  users: {
    list: '/users',
  },
  members: {
    list: '/members',
    create: '/members',
    detail: (id: string) => `/members/${id}`,
    update: (id: string) => `/members/${id}`,
    delete: (id: string) => `/members/${id}`,
    memberships: (id: string) => `/members/${id}/membership-plans`,
    createMemberships: (id: string) => `/members/${id}/membership-plans`,
    membershipsPayment: (id: string) => `/members/${id}/membership-payments`,
    createMembershipsPayment: (id: string) =>
      `/members/${id}/membership-payments`,
    financials: (id: string) => `/members/${id}/financials`,
    measurements: (id: string) => `/members/${id}/measurements`,
  },
  memberships: {
    list: '/membership_plans',
    create: '/membership_plans',
    detail: (id: string) => `/membership_plans/${id}`,
    update: (id: string) => `/membership_plans/${id}`,
    delete: (id: string) => `/membership_plans/${id}`,
  },
  trainers: {
    list: '/trainers',
    create: '/trainers',
    detail: (id: string) => `/trainers/${id}`,
    update: (id: string) => `/trainers/${id}`,
    delete: (id: string) => `/trainers/${id}`,
    availableWorkouts: (id: string) => `/trainers/${id}/available-workouts`,
    workSchedule: (id: string) => `/trainers/${id}/work-schedules`,
    updateWorkSchedule: (id: string) => `/trainers/${id}/work-schedules`,
  },
  services: {
    list: '/services',
    create: '/services',
    detail: (id: string) => `/services/${id}`,
    update: (id: string) => `/services/${id}`,
    delete: (id: string) => `/services/${id}`,
    session: (id: string) => `/services/${id}/sessions`,
    workout: (id: string, session_id: string) => `/services/${id}/sessions/${session_id}/workouts`,
  },
  rooms: {
    list: '/rooms',
    create: '/rooms',
    listEquipment: (id: string) => `/rooms/${id}/equipments`,
    detail: (id: string) => `/rooms/${id}`,
    update: (id: string) => `/rooms/${id}`,
    delete: (id: string) => `/rooms/${id}`,
  },
  equipments: {
    list: '/equipments',
    create: '/equipments',
    detail: (id: string) => `/equipments/${id}`,
    update: (id: string) => `/equipments/${id}`,
    delete: (id: string) => `/equipments/${id}`,
  },
  equipmentCategories: {
    list: '/equipment_categories',
    create: '/equipment_categories',
    detail: (id: string) => `/equipment_categories/${id}`,
    update: (id: string) => `/equipment_categories/${id}`,
    delete: (id: string) => `/equipment_categories/${id}`,
  },
  bookings: {
    list: '/admin/bookings',
    create: '/admin/bookings',
    detail: (id: string) => `/bookings/${id}`,
    update: (id: string) => `/bookings/${id}`,
    delete: (id: string) => `/bookings/${id}`,
    autoAssign: '/admin/bookings/solver-schedule',
    saveSchedule: '/admin/bookings/save-schedule',
    recommend: (id: string) => `/admin/bookings/${id}/recommend-trainers`
  },
  workouts: {
    list: '/workouts',
    create: '/workouts',
    detail: (id: string) => `/workouts/${id}`,
    update: (id: string) => `/workouts/${id}`,
    delete: (id: string) => `/workouts/${id}`,
    trainer: (id: string) => `/workouts/${id}/trainers`,
    equipment: (id: string) => `/workouts/${id}/equipments`,
    deleteEquipment: (id: string, equipmentId: string) => `/workouts/${id}/equipments/${equipmentId}`,
  },
  daysOff: {
    list: '/days-off-requests',
    create: '/days-off-requests',
    detail: (id: string) => `/days-off-requests/${id}`,
    update: (id: string) => `/days-off-requests/${id}`,
    delete: (id: string) => `/days-off-requests/${id}`,
    approve: (id: string) => `/days-off-requests/${id}/approve`,
    reject: (id: string) => `/days-off-requests/${id}/reject`,
  },
  session: {
    create: '/sessions',
    update: (id: string) => `/sessions/${id}`,
    delete: (id: string) => `/sessions/${id}`,
    workout: (id: string, workoutId: string) => `/sessions/${id}/workouts/${workoutId}`,
  },
  dashboard: {
    index: 'dashboard',
    trainer: 'dashboard/trainer',
    member: 'dashboard/member',
    workout: 'dashboard/workout',
    revenueMonthly: 'dashboard/revenue-monthly',
    revenueYearly: 'dashboard/revenue-yearly',
  }
}