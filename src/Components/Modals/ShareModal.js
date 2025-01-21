import React from "react";
import MainModal from "./MainModal";
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
    EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { MdEmail } from "react-icons/md";

function ShareMovieModal({ modalOpen, setModalOpen, movie }) {
    const shareData = [
      {
        icon: FaFacebook,
        shareButton: FacebookShareButton,
      },
      {
        icon: FaTwitter,
        shareButton: TwitterShareButton,
      },
      {
        icon: FaTelegram,
        shareButton: TelegramShareButton,
      },
      {
        icon: FaWhatsapp,
        shareButton: WhatsappShareButton,
      },
      {
        icon: FaPinterest,
        shareButton: PinterestShareButton,
      },
      {
        icon: MdEmail,
        shareButton: EmailShareButton,
      },
    ];
  
    const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;
  
    return (
      <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="inline-block w-full max-w-md rounded-lg bg-gray-900 p-8 shadow-lg">
          <h2 className="text-2xl text-center text-white mb-6">
            Share <span className="font-bold">"{movie?.name}"</span>
          </h2>
          {/* Single Row Layout */}
          <div className="flex justify-center gap-4">
            {shareData.map((data, index) => (
              <data.shareButton
                key={index}
                url={url}
                quote="NetMirror | Free Movies Site"
              >
                <div className="w-12 h-12 bg-dry rounded-lg flex justify-center items-center transition hover:bg-subMain text-white">
                  <data.icon className="text-xl" />
                </div>
              </data.shareButton>
            ))}
          </div>
        </div>
      </MainModal>
    );
  }
  
  export default ShareMovieModal;
  