import { toast } from "react-toastify";

/**
 * Displays a toast notification with the specified message and type.
 *
 * @param {string} message - The message to display in the toast notification.
 * @param {string} type - The type of toast notification (e.g., 'success', 'error', 'info', 'warning').
 * @returns {object} The toast notification instance.
 */
export default function showToast(message, type) {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}