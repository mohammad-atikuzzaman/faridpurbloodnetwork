const AdminCard = () => {
  return (
    <div className="card bg-red-50 min-w-72 shadow-xl hover:scale-[103%] transition-all duration-200">
      <figure className="min-w-72 h-72">
        <img
          src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/460113262_3815541052108382_2354797427226058335_n.jpg?stp=c0.4.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFnVsAEXdeKmj5t2bo8mUtBJXGGanEFscslcYZqcQWxyzK59SleqRffdfUYxg0S9VdUjF-28K_EW4LLmowMDNQC&_nc_ohc=H-Iw7lfagZQQ7kNvgELVa-6&_nc_zt=23&_nc_ht=scontent.fdac90-1.fna&_nc_gid=AXylj9N_Sx2Nm2nUYJF4hOw&oh=00_AYBLar_Q1xqTEmxQeTOQ9pzmx2Y_WIB0Gmlzu9QdzYuwDw&oe=67358274"
          alt="atikuzzaman"
          className="w-full object-fill"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-red-500">
          Md Atikuzzaman
          <div className="badge bg-red-400 font-semibold text-white">ADMIN</div>
        </h2>
        <p className="text-gray-500 font-semibold">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <a href="tel:+8801729414662" target="_blank" className="badge badge-outline badge-error">Whatsapp</a>
          <a href="https://www.facebook.com/mohammadakash20" target="_blank" className="badge badge-outline badge-error">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
