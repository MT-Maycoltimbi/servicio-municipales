import { a as defineEventHandler } from './nitro/node-server.mjs';
import { S as Service } from './service.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'mongoose';
import 'bcrypt';
import 'generate-password';
import 'nodemailer';

const index = defineEventHandler(async (event) => {
  const data = await Service.aggregate([
    {
      $lookup: {
        from: "courses",
        localField: "_id",
        foreignField: "_service",
        as: "courses"
      }
    },
    {
      $unwind: "$courses"
      // Divide los cursos en documentos separados
    },
    {
      $lookup: {
        from: "inscriptions",
        localField: "courses._id",
        foreignField: "_course",
        as: "courses.inscriptions"
      }
    },
    {
      $group: {
        _id: "$_id",
        // Restaura los campos del servicio original
        service: { $first: "$$ROOT" },
        courses: { $push: "$courses" }
      }
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ["$service", { courses: "$courses" }]
        }
      }
    }
  ]);
  return {
    data
  };
});

export { index as default };
//# sourceMappingURL=index3.mjs.map
