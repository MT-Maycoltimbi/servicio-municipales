import { Service } from "~/server/models/service"

export default defineEventHandler(async (event) =>{
  const data = await Service.aggregate([
    {
      $lookup:{
        from: 'courses',
        localField: '_id',
        foreignField: '_service',
        as: 'courses'
      },
    },
    {
      $unwind: '$courses' // Divide los cursos en documentos separados
    },
    {
      $lookup: {
        from: 'inscriptions',
        localField: 'courses._id',
        foreignField: '_course',
        as: 'courses.inscriptions'
      }
    },
    {
      $group: {
        _id: '$_id',
        // Restaura los campos del servicio original
        service: { $first: '$$ROOT' },
        courses: { $push: '$courses' }
      }
    },
    {
      $replaceRoot: {
        newRoot: { $mergeObjects: ['$service', { courses: '$courses' }]
        }
      }
    }
  ])
  return {
    data: data
  }
})