import { Injectable } from '@nestjs/common';
import { FileService, FileType } from './file/file.service';

@Injectable()
export class AppService {
  constructor(private fileService: FileService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createImage(picture) {
    const picturePath = await this.fileService.createFile(
      FileType.IMAGE,
      picture[0],
    );
    return `http://localhost:${process.env.PORT || 4500}/${picturePath}`;
  }
}
