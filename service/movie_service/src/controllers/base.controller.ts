import { BaseService } from "@/service/base.service";
import { Document } from "mongoose";
import { Request, Response } from "express";
import { getNumberString } from "@/helper/validate";

abstract class BaseController<T extends Document> {
  protected service: BaseService<T>;

  constructor(_service: BaseService<T>) {
    this.service = _service;
  }

  public getPaging = async (req: Request, res: Response) => {
    try {
      const page = getNumberString(req?.query?.page);
      const limit = getNumberString(req?.query?.limit);

      if (!page || !limit) {
        throw new Error("Missing query parameters");
      }

      const data = await this.service.findPaging(page, limit);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = getNumberString(req.params.id);

      if (!id) {
        throw new Error("Missing id parameter");
      }

      const data = await this.service.findById(id);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json(error?.message || error);
    }
  };

  public async create(req: Request, res: Response) {
    try {
      const data = await this.service.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async createIdNumber(req: Request, res: Response) {
    try {
      const data = await this.service.createIdNumber(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = getNumberString(req.params.id);
      console.log(id);

      if (!id) {
        throw new Error("Missing id parameter");
      }
      const data = await this.service.updateById(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = getNumberString(req.params.id);
      console.log(id);

      if (!id) {
        throw new Error("Missing id parameter");
      }
      await this.service.deleteById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export { BaseController };
