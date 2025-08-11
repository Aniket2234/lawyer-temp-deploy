import React from "react";
import { ExternalLink } from "lucide-react";

const CHATBASE_IFRAME_URL =
  "https://www.chatbase.co/chatbot-iframe/Jh3JTS1qroLRmINTDR3IA";

export default function ChatInterface() {
  return (
    <div className="w-full">
      {/* Chat Container */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Title + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Chat with AI Assistant
          </h2>
          <button
            onClick={() =>
              window.open(CHATBASE_IFRAME_URL, "_blank", "noopener,noreferrer")
            }
            className="inline-flex items-center gap-2 text-base px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:scale-105 hover:from-blue-700 hover:to-blue-800 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
            title="Open Chatbase in new tab"
            aria-label="Launch Chatbase in new tab"
          >
            <ExternalLink className="h-5 w-5" />
            Open in New Tab
          </button>
        </div>

        {/* Iframe - UNCHANGED CHATBASE INTERFACE */}
        <div className="w-full h-[600px] border border-gray-200 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src={CHATBASE_IFRAME_URL}
            title="Chatbase Legal Assistant"
            frameBorder="0"
            className="w-full h-full rounded-2xl"
            allow="camera; microphone; clipboard-read; clipboard-write; encrypted-media"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-sm text-gray-500 text-center">
          Powered by advanced AI technology for instant legal assistance
        </div>
      </div>
    </div>
  );
}