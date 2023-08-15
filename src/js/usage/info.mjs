class Data {
  icons = {
    instagram: "icon-instagram.svg",
    facebook: "icon-facebook.svg",
    twitter: "icon-twitter.svg",
    youtube: "icon-youtube.svg",
  };

  getData() {
    return {
      total_followers: 23004,
      social: [
        {
          icon: this.icons.facebook,
          social_id: "@nathanf",
          followers: 1987,
          unit: "followers",
          today: 12,
        },
        {
          icon: this.icons.twitter,
          social_id: "@nathanf",
          followers: 1044,
          unit: "followers",
          today: 99,
        },
        {
          icon: this.icons.instagram,
          social_id: "@realnathanf",
          followers: "11K",
          unit: "followers",
          today: 1099,
        },
        {
          icon: this.icons.youtube,
          social_id: "Nathan F.",
          followers: 8239,
          unit: "subscribers",
          today: 144,
        },
      ],
      today_overview: [
        {
          title: "Page Views",
          icon: this.icons.facebook,
          number: 87,
          percentage: 3,
        },
        {
          title: "Likes",
          icon: this.icons.facebook,
          number: 52,
          percentage: -2,
        },
        {
          title: "Likes",
          icon: this.icons.instagram,
          number: 5462,
          percentage: 2257,
        },
        {
          title: "Profile Views",
          icon: this.icons.instagram,
          number: "52K",
          percentage: 1375,
        },
        {
          title: "Retweets",
          icon: this.icons.twitter,
          number: 117,
          percentage: 303,
        },
        {
          title: "Likes",
          icon: this.icons.twitter,
          number: 507,
          percentage: 553,
        },
        {
          title: "Likes",
          icon: this.icons.youtube,
          number: 507,
          percentage: 553,
        },
        {
          title: "Total Views",
          icon: this.icons.youtube,
          number: 1407,
          percentage: -12,
        },
      ],
    };
  }
  logData() {
    console.log(this.getData());
  }
}

const data = new Data();
export default data;
