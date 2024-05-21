import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateBookingPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
