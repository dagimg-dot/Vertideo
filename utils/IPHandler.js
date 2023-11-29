import os from "os";

// Get the IP address dynamically
const getIpAddress = () => {
  const interfaces = os.networkInterfaces();
  if (interfaces["Wi-Fi"]) {
    const addresses = interfaces["Wi-Fi"];
    for (let address of addresses) {
      if (address.family === "IPv4") {
        return address.address;
      }
    }
  }

  return "localhost"; // Fallback to localhost if no IP address found
};

export default getIpAddress;
