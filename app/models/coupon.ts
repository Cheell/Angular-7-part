export class Coupon {
    public constructor(
        public couponId?: number,
        public couponTitle?: string,
        public couponStartDate?: string,
        public couponEndDate?: string,
        public couponAmmount?: number,
        public couponMessage?: string,
        public couponPrice?: number,
        public couponImage?: string,
        public couponType?: string,
        public companyId?: string,
        public companyName?: string
    ){}
}