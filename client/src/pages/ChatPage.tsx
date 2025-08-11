import { useEffect } from 'react';
import ChatInterface from '../components/ChatInterface';
import LegalBackground from '../components/LegalBackground';
import { MessageSquare, Shield, Clock, Users } from 'lucide-react';

export default function ChatPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <LegalBackground variant="subtle" className="opacity-10" />
      
      <div className="relative z-10">
        {/* Enhanced Page Header */}
        <div className="text-center pt-8 pb-6 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              AI Legal Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant legal guidance, document analysis, and professional advice through our advanced AI-powered assistant
            </p>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/50">
                <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">24/7 Available</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/50">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Secure & Private</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/50">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Instant Response</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/50">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Expert Knowledge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface Container */}
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 p-6 md:p-8">
            <ChatInterface />
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              💡 Quick Tips for Better Results
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="space-y-2">
                <p><span className="font-medium text-blue-600">✓ Be specific:</span> Include relevant details about your situation</p>
                <p><span className="font-medium text-green-600">✓ Mention location:</span> Legal advice varies by state/jurisdiction</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-medium text-purple-600">✓ Ask follow-ups:</span> Request clarification if needed</p>
                <p><span className="font-medium text-orange-600">✓ Document type:</span> Specify contracts, agreements, etc.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Important:</span> This AI assistant provides general legal information only. 
              For specific legal advice, please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}