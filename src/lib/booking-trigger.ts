// Custom event dispatcher to open booking modal from anywhere
export function triggerBooking(serviceName?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: { service: serviceName },
      })
    );
  }
}
