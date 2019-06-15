/// <reference types="express" />
import { Count, Filter, Where } from '@loopback/repository';
import { Request, Response } from '@loopback/rest';
import { File } from '../models';
import { FileRepository } from '../repositories';
import multer = require('multer');
export declare class FileController {
    fileRepository: FileRepository;
    storage: multer.StorageEngine;
    constructor(fileRepository: FileRepository);
    upload(request: Request, response: Response): Promise<Object>;
    create(file: File): Promise<File>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<File[]>;
    updateAll(file: File, where?: Where): Promise<Count>;
    findById(id: string): Promise<File>;
    updateById(id: string, file: File): Promise<void>;
    replaceById(id: string, file: File): Promise<void>;
    deleteById(id: string): Promise<void>;
}
