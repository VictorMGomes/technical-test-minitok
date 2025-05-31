import { Injectable } from '@nestjs/common';
import * as packageJson from 'package.json';
import type { PackageJsonType } from './system.schema';

const typedPackageJson = packageJson as PackageJsonType;

@Injectable()
export class SystemService {
  getAppName(): string {
    return typedPackageJson.name;
  }

  getAppVersion(): string {
    return typedPackageJson.version;
  }

  getAppDescription(): string {
    return typedPackageJson.description;
  }

  getAppAuthor(): { name: string; email: string; url: string } {
    return typedPackageJson.author;
  }
}
