import logger from "../config/logger.js";
// Models
import { Unit } from "../models/unit.model.js";
import { Category } from "../models/category.model.js";
// Get infos from package.json
import { readFile } from "fs/promises";
const pkg = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url))
);

// A resolver can optionally accept four positional arguments: (parent, args, context, info)
export const resolvers = {
  Query: {
    async infos() {
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
    async units() {
      try {
        return await Unit.find();
      } catch (error) {
        logger.error(error);
      }
    },
    async unit(parent, args) {
      try {
        return await Unit.findOne({ type: args.type });
      } catch (error) {
        logger.error(error);
      }
    },
    async categories(_, { offset, first }) {
      try {
        const skip = offset ?? 0;
        const limit = first ?? 10;
        return await Category.find().skip(skip).limit(limit);
      } catch (error) {
        logger.error(error);
      }
    },
    async rootCategories(_, { offset, first }) {
      try {
        const skip = offset ?? 0;
        const limit = first ?? 10;
        return await Category.find({ path: '/' }).skip(skip).limit(limit);
      } catch (error) {
        logger.error(error);
      }
    },
    async category(parent, args) {
      try {
        return await Category.findOne({ name: args.name });
      } catch (error) {
        logger.error(error);
      }
    }
  },
  Category: {
    categories(parent) {
      try {
        if (parent.childrenIds && parent.childrenIds.length > 0) {
          const subcategories = [];
          parent.childrenIds.forEach((id) => {
            const category = Category.findOne({ categoryId: id });
            subcategories.push(category);
          });
          return subcategories;
        } else {
          return null;
        }
      } catch (error) {
        logger.error(error);
      }
    }
  }
};
