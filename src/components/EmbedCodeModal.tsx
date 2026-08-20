import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Code2, Globe, Layers } from 'lucide-react';

interface EmbedCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmbedCodeModal({ isOpen, onClose }: EmbedCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'instapage' | 'iframe' | 'github'>('instapage');

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://your-domain.com';

  const iframeSnippet = `<!-- Live365 Broadcaster Pricing Table Embed -->
<div style="width: 100%; overflow-x: auto; background-color: #0e0a29; padding: 20px 0;">
  <iframe 
    src="${currentUrl}" 
    width="100%" 
    height="920" 
    frameborder="0" 
    scrolling="no" 
    style="border: none; max-width: 100%; display: block; margin: 0 auto;"
    title="Live365 Broadcaster Pricing"
    allow="clipboard-write"
  ></iframe>
</div>`;

  const instapageInstructions = `1. In Instapage builder, drag an "HTML / Custom Code" block onto your page.
2. Set the block width to 100% (or page container width) and minimum height to 950px.
3. Paste the following embed snippet inside the HTML editor:

${iframeSnippet}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-800"
        >
          {/* Header */}
          <div className="bg-[#0e0a29] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Code2 className="w-4 h-4" />
              <span>Instapage & iFrame Integration</span>
            </div>
            <h3 className="text-xl font-bold">Embed Pricing Table</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Easily embed this responsive Live365 pricing table into Instapage, GitHub Pages, or any CMS.
            </p>
          </div>

          <div className="p-6">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-4 gap-4">
              <button
                onClick={() => setActiveTab('instapage')}
                className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer border-b-2 transition ${
                  activeTab === 'instapage'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Instapage Instructions</span>
              </button>
              <button
                onClick={() => setActiveTab('iframe')}
                className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer border-b-2 transition ${
                  activeTab === 'iframe'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Raw iFrame Code</span>
              </button>
              <button
                onClick={() => setActiveTab('github')}
                className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-1.5 cursor-pointer border-b-2 transition ${
                  activeTab === 'github'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>GitHub Pages Hosting</span>
              </button>
            </div>

            {/* Tab content */}
            {activeTab === 'instapage' && (
              <div className="space-y-3">
                <ol className="text-xs text-slate-600 space-y-1 list-decimal list-inside">
                  <li>In Instapage, drag an <strong>HTML / Custom Code</strong> element to your section.</li>
                  <li>Set container width to <strong>100%</strong> and height to approx <strong>950px</strong>.</li>
                  <li>Copy and paste the embed code below into the HTML element:</li>
                </ol>

                <div className="relative bg-slate-900 rounded-lg p-4 font-mono text-xs text-emerald-300 overflow-x-auto max-h-48">
                  <pre>{iframeSnippet}</pre>
                  <button
                    onClick={() => handleCopy(iframeSnippet)}
                    className="absolute top-2 right-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-sans flex items-center gap-1 cursor-pointer transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'iframe' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-600">
                  Embed this HTML code directly in any webpage or blog post:
                </p>
                <div className="relative bg-slate-900 rounded-lg p-4 font-mono text-xs text-emerald-300 overflow-x-auto max-h-48">
                  <pre>{iframeSnippet}</pre>
                  <button
                    onClick={() => handleCopy(iframeSnippet)}
                    className="absolute top-2 right-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-sans flex items-center gap-1 cursor-pointer transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'github' && (
              <div className="space-y-2 text-xs text-slate-600">
                <p>
                  To host this on <strong>GitHub Pages</strong>:
                </p>
                <ol className="list-decimal list-inside space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <li>Push this repository to GitHub.</li>
                  <li>Run <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">npm run build</code> which outputs static files into the <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">dist/</code> directory.</li>
                  <li>In your GitHub Repository Settings → Pages, select <strong>GitHub Actions</strong> or deploy from the <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">dist</code> branch.</li>
                  <li>Use your custom GitHub Pages URL (e.g. <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">https://username.github.io/repo/</code>) in the iFrame src.</li>
                </ol>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
