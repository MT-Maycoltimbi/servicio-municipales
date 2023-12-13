import { Session } from 'next-auth';

export {}

declare global{
  interface SessionType extends Session{
    _id?: string | undefined
    rol?: string | undefined
    _service?: string
  }

  interface IService{
    _id: string
    name: string
    description: string
  }

  interface IUser{
    _id: string
    fullName: string
    email: string
    rol: string
    _service: IService | null
  }

  interface ITeacher{
    _id: string
    fullName: string
    email: string
    degree: string
  }

  interface ISchedule{
    startTime: number,
    endTime: number,
    day: string
  }

  interface ICourse{
    _id: string,
    name: String,
    spaces: number,
    startDate: number,
    endDate: number,
    schedules: ISchedule[],
    location: String,
    rangeAge:{
      min: number,
      max: number
    },
    _service: string,
    _teacher: ITeacher
  }

  interface ICourseCreate{
    name: String,
    spaces: number,
    startDate: number,
    endDate: number,
    schedules: ISchedule[],
    location: String,
    rangeAge:{
      min: number,
      max: number
    },
    _service: String,
    _teacher: String,
  }
  interface ICourseUpdate{
    _id: string
    name: String,
    spaces: number,
    startDate: number,
    endDate: number,
    schedules: ISchedule[],
    location: String,
    rangeAge:{
      min: number,
      max: number
    },
    _service: String,
    _teacher: String,
  }

  interface IInscription{
    _id: string
    name: string
    birdthDate: number
    zone: string
    address: string
    phone: string
    cedula: string
    sexo: 'M' | 'F'
  }

  interface IInscriptionCreate{
    name: string
    birdthDate: number
    zone: string
    address: string
    phone: string
    cedula: string
    sexo: 'M' | 'F'
    _course: string
  }

  interface IInscriptionUpdate{
    _id: string
    name: string
    birdthDate: number
    zone: string
    address: string
    phone: string
    cedula: string
    sexo: 'M' | 'F'
    _course: string
  }

  interface IStatistic{
    _id: string
    name: string
    description: string
    courses:[{
      _id: string,
      name: String,
      spaces: number,
      startDate: number,
      endDate: number,
      schedules: ISchedule[],
      location: String,
      rangeAge:{
        min: number,
        max: number
      },
      inscriptions: IInscription[]
    }]
  }
}