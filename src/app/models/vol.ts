export interface Vol {
  id: number;
  volNumber: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureDate: Date;
  arrivalDate: Date;
  late: boolean;
  price: number;
}
