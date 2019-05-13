import { Coupon } from "./coupon";

export class CouponPurchase {
	public customerId?: number;
	public couponId?: number;
    public amount?: number;
    public coupon?: Coupon;
}
