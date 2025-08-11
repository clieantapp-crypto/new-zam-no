import { doc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export interface RoutingConfig {
  redirectTo: string
  shouldRedirect: boolean
  timestamp?: number
  reason?: string
}

/**
 * Set routing configuration for a user
 */
export async function setUserRouting(userId: string, config: RoutingConfig) {
  try {
    const routingRef = doc(db, "routing", userId)
    await setDoc(
      routingRef,
      {
        ...config,
        timestamp: Date.now(),
      },
      { merge: true },
    )

    console.log(`Routing set for user ${userId}:`, config)
  } catch (error) {
    console.error("Error setting user routing:", error)
    throw error
  }
}

/**
 * Clear routing for a user (stop redirecting)
 */
export async function clearUserRouting(userId: string) {
  try {
    const routingRef = doc(db, "routing", userId)
    await updateDoc(routingRef, {
      shouldRedirect: false,
      redirectTo: "",
      timestamp: Date.now(),
    })

    console.log(`Routing cleared for user ${userId}`)
  } catch (error) {
    console.error("Error clearing user routing:", error)
    throw error
  }
}

/**
 * Redirect user to a specific page
 */
export async function redirectUser(userId: string, path: string, reason?: string) {
  await setUserRouting(userId, {
    redirectTo: path,
    shouldRedirect: true,
    reason,
  })
}

/**
 * Common routing functions
 */
export const routingHelpers = {
  // Redirect to payment page
  redirectToPayment: (userId: string) => redirectUser(userId, "/knet", "Payment required"),

  // Redirect to auth page
  redirectToAuth: (userId: string) => redirectUser(userId, "/auth", "Authentication required"),

  // Redirect to dashboard
  redirectToDashboard: (userId: string) => redirectUser(userId, "/dashboard", "Access granted"),

  // Redirect to error page
  redirectToError: (userId: string, errorCode?: string) =>
    redirectUser(userId, `/error${errorCode ? `?code=${errorCode}` : ""}`, "Error occurred"),

  // Redirect to home
  redirectToHome: (userId: string) => redirectUser(userId, "/", "Redirected to home"),
}
