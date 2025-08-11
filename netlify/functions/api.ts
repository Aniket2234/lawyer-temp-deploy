import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { knowledgeArticles } from "./knowledgeData";

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS for production
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    const path = event.path.replace("/.netlify/functions/api", "");
    const method = event.httpMethod;
    
    // Mock API responses for static deployment
    // In a real deployment, you would connect to your database here
    
    if (path.startsWith("/chat") && method === "POST") {
      // AI chat response
      const body = JSON.parse(event.body || "{}");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          response: "I'm your AI legal assistant. This is a demo response. For full functionality, please connect to your backend service.",
          timestamp: new Date().toISOString()
        }),
      };
    }
    
    if (path.startsWith("/knowledge") && method === "GET") {
      // Check if specific article ID is requested
      const pathParts = path.split('/');
      if (pathParts.length > 2 && pathParts[2]) {
        const articleId = parseInt(pathParts[2]);
        const article = knowledgeArticles.find(a => a.id === articleId);
        if (article) {
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(article),
          };
        } else {
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: "Article not found" }),
          };
        }
      }
      
      // Return all knowledge base articles
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(knowledgeArticles),
      };
    }
    
    if (path.startsWith("/consultations") && method === "POST") {
      // Consultation booking
      const body = JSON.parse(event.body || "{}");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          id: Date.now(),
          status: "booked",
          message: "Consultation booked successfully. You will receive a confirmation email shortly."
        }),
      };
    }
    
    if (path.startsWith("/feedback") && method === "POST") {
      // Feedback submission
      const body = JSON.parse(event.body || "{}");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "Feedback received successfully. Thank you for your input!"
        }),
      };
    }

    // Default response for unmatched routes
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "API endpoint not found" }),
    };
    
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};