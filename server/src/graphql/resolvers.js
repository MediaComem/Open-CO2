import logger from "../config/logger.js";
// Models
import { Unit } from "../models/unit.model.js";
import { Category } from "../models/category.model.js";
// Get infos from package.json
import { readFile } from "fs/promises";
const pkg = JSON.parse(
  await readFile(new URL("../../package.json", import.meta.url))
);

// A resolver can optionally accept four positional arguments: (parent, args, context, info)
export const resolvers = {
  Query: {
    getApiInfos: async function () {
      try {
        const unitsCount = await Unit.countDocuments();
        const categoriesCount = await Category.countDocuments();

        return {
          name: pkg.title,
          version: pkg.version,
          description: pkg.description,
          homepage: pkg.homepage,
          units: unitsCount,
          categories: categoriesCount
        };
      } catch (error) {
        logger.error(error);
      }
    },
    getAllUnits: async function () {
      try {
        const result = await Unit.find();
        return result;
      } catch (error) {
        logger.error(error);
      }
    },
    getAllCategories: async function () {
      try {
        const result = await Category.find();
        return result;
      } catch (error) {
        logger.error(error);
      }
    },
    getCategoryByName: async function (parent, args) {
      try {
        const result = await Category.findOne({ name: args.name });
        return result;
      } catch (error) {
        logger.error(error);
      }
    }
  }
};
