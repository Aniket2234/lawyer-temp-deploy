// import React from "react";
// import { ExternalLink } from "lucide-react";

// const CHATBASE_IFRAME_URL =
//   "https://www.chatbase.co/chatbot-iframe/Jh3JTS1qroLRmINTDR3IA";

// export default function ChatInterface() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-50 flex flex-col items-center py-10 px-4">
//       {/* Header with subtle fade-down animation */}
//       <header className="text-center mb-8 animate-fade-down">
//         <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">
//           Pocket Lawyer
//         </h1>
//         <p className="text-base text-blue-500 mt-2 font-medium">
//           Your AI-Powered Legal Assistant
//         </p>
//       </header>

//       {/* Card container with fade-up animation */}
//       <div className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-xl border border-blue-100 animate-fade-up">
//         {/* Title + Button */}
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-blue-600">
//             Advanced AI Assistant
//           </h2>
//           <button
//             onClick={() =>
//               window.open(CHATBASE_IFRAME_URL, "_blank", "noopener")
//             }
//             className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
//             title="Open Chatbase in new tab"
//           >
//             <ExternalLink className="h-4 w-4" />
//             Launch in new tab
//           </button>
//         </div>

//         {/* Iframe with reduced height */}
//         <div className="w-full h-[600px] border border-blue-200 rounded-lg overflow-hidden shadow-inner">
//           <iframe
//             src={CHATBASE_IFRAME_URL}
//             title="Chatbase Legal Assistant"
//             frameBorder="0"
//             className="w-full h-full"
//             allow="camera; microphone; clipboard-read; clipboard-write; encrypted-media"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-xs text-blue-400 text-center animate-fade-up-delay">
//         Note: This interface embeds your Chatbase assistant. If the iframe shows
//         a landing page, that’s determined by your Chatbase settings.
//       </footer>

//       {/* Animations */}
//       <style>{`
//         @keyframes fadeDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(15px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-down {
//           animation: fadeDown 0.6s ease-out;
//         }
//         .animate-fade-up {
//           animation: fadeUp 0.6s ease-out;
//         }
//         .animate-fade-up-delay {
//           animation: fadeUp 0.8s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }
import React from "react";
import { ExternalLink } from "lucide-react";

const CHATBASE_IFRAME_URL =
  "https://www.chatbase.co/chatbot-iframe/Jh3JTS1qroLRmINTDR3IA";

export default function ChatInterface() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-blue-100 flex flex-col items-center py-14 px-6 sm:px-10">
      {/* Header */}
      <header className="text-center mb-12 animate-fade-down max-w-md">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-wide drop-shadow-md">
          Pocket Lawyer
        </h1>
        <p className="text-lg text-blue-600 mt-3 font-semibold">
          Your AI-Powered Legal Assistant
        </p>
      </header>

      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-3xl p-8 shadow-lg border border-blue-200 animate-fade-up">
        {/* Title + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">
            Advanced AI Assistant
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
            Launch in new tab
          </button>
        </div>

        {/* Iframe */}
        <div className="w-full h-[450px] border border-blue-300 rounded-2xl overflow-hidden shadow-inner">
          <iframe
            src={CHATBASE_IFRAME_URL}
            title="Chatbase Legal Assistant"
            frameBorder="0"
            className="w-full h-full rounded-2xl"
            allow="camera; microphone; clipboard-read; clipboard-write; encrypted-media"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-sm text-blue-500 text-center max-w-sm animate-fade-up-delay px-4">
        Note: This interface embeds your Chatbase assistant. If the iframe shows
        a landing page, that’s determined by your Chatbase settings.
      </footer>

      {/* Animations and styles */}
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-down {
          animation: fadeDown 0.6s ease-out forwards;
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
        .animate-fade-up-delay {
          animation: fadeUp 0.85s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
