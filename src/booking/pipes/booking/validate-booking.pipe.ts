import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateBookingPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'param' && metadata.data === 'id') {
      let newVal = parseInt(value);
      return isFinite(newVal) ? newVal : value;
    }

    let tempValue = { ...value };
    let fromDate = new Date(value.fromDate);
    let toDate = new Date(value.toDate);
    let isValidDate = (date: Date) => {
      return date.toString() !== 'Invalid Date';
    }

    if (isValidDate(fromDate) ) {
      tempValue.fromDate = fromDate;
    }
    if (isValidDate(toDate)) {
      tempValue.toDate = toDate;
    }

    return tempValue;
  }
}