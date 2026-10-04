/** @format */

export const getUserProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserProfile: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const followUnfollowUser = async(req,res)=>{
	try {
		
	} catch (error) {
		console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
		
	}

}