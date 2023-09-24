const now = new Date()

export const LEGEND_TYPE = [
  {
    id: 1,
    type: 'cancel',
    label: 'Cancelled',
    color: 'bg-gray',
  },
  {
    id: 2,
    type: 'pending',
    label: 'Pending',
    color: 'bg-orange',
  },
  {
    id: 3,
    type: 'new',
    label: 'New Request',
    color: 'bg-red',
  },
  {
    id: 4,
    type: 'accepted',
    label: 'Accepted',
    color: 'bg-green'
  },
  {
    id: 5,
    type: 'completed',
    label: 'Completed',
    color: 'bg-blue'
  },
]

export const RESOURCE = [
  {
    id: 1,
    name: 'James Tan',
  },
  {
    id: 2,
    name: 'Kenneth Goh'
  },
  {
    id: 3, 
    name: 'Adeline Tan'
  }
]
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  
  {
    id: 1,
    customer: 'Mr A',
    agendar: 'Agenda',
    start: new Date(2023, 9, 23, 9, 0, 0, 0),
    end: new Date(2023, 9, 23, 10, 0, 0, 0),
    resourceId: 1,
    type: 'accepted'
  }, 
  {
    id: 2,
    customer: 'Mr B',
    agendar: 'Agenda',
    start: new Date(2023, 9, 23, 9, 0, 0, 0),
    end: new Date(2023, 9, 23, 10, 0, 0, 0),
    resourceId: 2,
    type: 'accepted'
  }, 
  {
    id: 3,
    customer: 'Mr B',
    agendar: 'Agenda',
    start: new Date(2023, 9, 23, 10, 0, 0, 0),
    end: new Date(2023, 9, 23, 11, 0, 0, 0),
    resourceId: 2,
    type: 'pending'
  }, 
  {
    id: 4,
    customer: 'Mr B',
    agendar: 'Agenda',
    start: new Date(2023, 9, 23, 11, 0, 0, 0),
    end: new Date(2023, 9, 23, 12, 0, 0, 0),
    resourceId: 2,
    type: 'accepted'
  }, 
  {
    id: 5,
    customer: 'Mr C',
    agendar: 'Agenda',
    start: new Date(2023, 9, 23, 9, 0, 0, 0),
    end: new Date(2023, 9, 23, 10, 0, 0, 0),
    resourceId: 3,
    type: 'new'
  }, 
]