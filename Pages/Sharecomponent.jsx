import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sharecomponent = () => {
  const navigate = useNavigate();
  const { postUrl } = useSelector((state) => state.share);
  
  console.log(postUrl);
  
  // Build manual share links
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(postUrl)}`;
  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`;
  const emailLink = `mailto:?subject=Check this out&body=${encodeURIComponent(postUrl)}`;

  const onClose = () => navigate("/Trial");

  const handleCopy = () => {
    navigator.clipboard.writeText(postUrl);
    alert("Link copied!");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this post",
          text: "Take a look at this!",
          url: postUrl,
        });
      } catch (err) {
        console.log("User cancelled sharing", err);
      }
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-80">
        <h2 className="text-lg font-semibold text-[#ff00b7] mb-4">
          Share this post
        </h2>

        <div className="flex flex-col gap-3">
          {/* Manual Links */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white rounded-lg p-2 text-center"
          >
            Share on WhatsApp
          </a>

          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white rounded-lg p-2 text-center"
          >
            Share on Twitter
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white rounded-lg p-2 text-center"
          >
            Share on LinkedIn
          </a>

          <a
            href={emailLink}
            className="bg-gray-700 text-white rounded-lg p-2 text-center"
          >
            Share via Email
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className="bg-gray-500 text-white rounded-lg p-2"
          >
            Copy Link
          </button>

          {/* Native Share API */}
          <button
            onClick={handleNativeShare}
            className="bg-purple-500 text-white rounded-lg p-2"
          >
            Share (Native)
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sharecomponent;
