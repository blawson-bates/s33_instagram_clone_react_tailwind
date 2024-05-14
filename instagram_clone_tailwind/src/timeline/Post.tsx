import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreOptionsIcon from "@mui/icons-material/MoreHoriz";
import FavoritesIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";

// https://fakerjs.dev/api/image.html#avatar
import { faker } from "@faker-js/faker";

import "../style.css";

// PostProps interface defined in Timeline.tsx
//function Post(props: PostProps) {
function Post({ user, image_url, image_alt, timestamp, likes }: PostProps) {
  return (
    <div className="w-[650px] mt-[30px] mr-[40px] mb-[50px] ml-[40px]">
      <div className="flex flex-row justify-between items-center mb-[10px] font-sans">
        <div className="flex flex-row items-center font-extrabold text-[17px] hover:cursor-pointer">
          <Avatar className="mr-[10px]">
            <img src={faker.image.avatarLegacy()} />
          </Avatar>
          {user}
          <span className="text-gray-500 text-[15px] ml-[5px]">
            • {timestamp}
          </span>
        </div>
        <div className="hover:cursor-pointer">
          <MoreOptionsIcon />
        </div>
      </div>
      <img
        className="w-full rounded-[6px] border-[1px] border-solid border-gray-500/[0.56]"
        src={image_url}
        alt={image_alt}
      />
      <div className="font-sans">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[120px] flex flex-row items-center justify-between">
            <FavoritesIcon className="material-icons post-icon" />
            <ChatIcon className="material-icons post-icon" />
            <ShareIcon className="material-icons post-icon-share" />
          </div>
          <BookmarkIcon className="material-icons post-icon" />
        </div>
        <span>{likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
