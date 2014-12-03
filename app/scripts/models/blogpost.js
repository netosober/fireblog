Fireblog.Blogpost = DS.Model.extend({
	title: DS.attr(),
	body: DS.attr(),
	publishedDate: DS.attr()
});

// Fireblog.Blogpost.reopenClass({
//   FIXTURES: [
//     { id: 1, title: 'Newest Blog post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet sem quis sapien bibendum elementum. Maecenas a condimentum lacus. Praesent id dapibus mi. Mauris volutpat fermentum est quis laoreet. Nunc eget ipsum tellus. Maecenas eget rutrum sapien, at dignissim nulla. Vivamus et faucibus arcu, eget vulputate augue. Aenean faucibus venenatis enim a suscipit. Nulla commodo velit id maximus interdum. Nunc mollis purus arcu, a accumsan diam venenatis bibendum. \
// Pellentesque consequat in sapien eget mollis. Integer eu lectus vel eros ullamcorper vehicula quis in leo. Duis pharetra erat vel lectus imperdiet ullamcorper. In efficitur, mi a pretium facilisis, neque nibh aliquet mauris, eget bibendum arcu est ut mi. In maximus iaculis ante ut rutrum. Mauris urna purus, venenatis nec venenatis sit amet, hendrerit a leo. Aliquam scelerisque euismod arcu. Mauris sed eleifend neque. Sed fringilla mattis ullamcorper. Proin sagittis tristique lacus ut suscipit. Sed tincidunt sapien non dolor tempor, nec interdum ex pharetra. Integer tellus turpis, semper non libero a, convallis tincidunt nunc. \
// Nunc sollicitudin cursus ex et scelerisque. Vivamus id augue eu tortor fermentum semper. Ut interdum nisi id sem imperdiet mollis. Maecenas faucibus enim at sodales fringilla. Donec elementum nunc et massa sodales, at hendrerit eros mattis. Ut laoreet tristique volutpat. Ut sit amet quam gravida, pulvinar nulla a, eleifend sem. Donec ac lectus ultricies, mattis est eget, malesuada enim. Suspendisse placerat nisi ac arcu posuere, id tempus nunc imperdiet. Sed massa lacus, porta a venenatis eu, finibus sed mi. Donec ac vulputate magna. Nulla ac augue tincidunt, viverra justo ac, gravida augue. Aenean facilisis magna id consequat tincidunt. Morbi feugiat ex at pellentesque congue. Sed aliquam neque eget condimentum suscipit. \
// Vestibulum nec velit eget purus auctor condimentum ac eu mi. Ut lobortis purus in sem eleifend, sed bibendum enim finibus. Pellentesque ac erat luctus, sagittis augue venenatis, feugiat risus. Curabitur quis elementum sem, at lacinia sapien. Aenean laoreet mauris id nisl sagittis, nec posuere neque consectetur. In pellentesque, ipsum a blandit porttitor, turpis eros eleifend enim, ut tristique sem leo vel turpis. Nulla orci turpis, mollis vel tempus et, egestas eu enim. Pellentesque in commodo nunc. Phasellus blandit commodo lectus. Integer tincidunt augue tellus, et viverra dui tincidunt nec. Aliquam a ultricies neque, vel ullamcorper dui. Etiam vehicula risus quis diam tempus, non laoreet tortor aliquet. Fusce eu ultricies mi. Aliquam cursus, velit quis lobortis facilisis, urna turpis porttitor ex, vel lacinia nunc nisl ut neque. Cras ornare sit amet nisl nec dapibus. \
// Cras eu blandit elit. Aliquam eleifend est id dictum dignissim. Curabitur tempus, felis et feugiat molestie, libero mi dignissim risus, sed egestas orci massa vitae metus. Suspendisse consectetur augue et mi fringilla imperdiet. Vivamus ac eros sit amet lectus dapibus rutrum nec sed odio. Etiam pretium eu quam et accumsan. Cras faucibus rutrum ante, eget sodales purus. Fusce blandit eros mattis viverra gravida.', publishedDate: '2015-09-20T04:30:00.000Z' },
//     { id: 2, title: 'Second Blog post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet sem quis sapien bibendum elementum. Maecenas a condimentum lacus. Praesent id dapibus mi. Mauris volutpat fermentum est quis laoreet. Nunc eget ipsum tellus. Maecenas eget rutrum sapien, at dignissim nulla. Vivamus et faucibus arcu, eget vulputate augue. Aenean faucibus venenatis enim a suscipit. Nulla commodo velit id maximus interdum. Nunc mollis purus arcu, a accumsan diam venenatis bibendum. \
// Pellentesque consequat in sapien eget mollis. Integer eu lectus vel eros ullamcorper vehicula quis in leo. Duis pharetra erat vel lectus imperdiet ullamcorper. In efficitur, mi a pretium facilisis, neque nibh aliquet mauris, eget bibendum arcu est ut mi. In maximus iaculis ante ut rutrum. Mauris urna purus, venenatis nec venenatis sit amet, hendrerit a leo. Aliquam scelerisque euismod arcu. Mauris sed eleifend neque. Sed fringilla mattis ullamcorper. Proin sagittis tristique lacus ut suscipit. Sed tincidunt sapien non dolor tempor, nec interdum ex pharetra. Integer tellus turpis, semper non libero a, convallis tincidunt nunc. \
// Nunc sollicitudin cursus ex et scelerisque. Vivamus id augue eu tortor fermentum semper. Ut interdum nisi id sem imperdiet mollis. Maecenas faucibus enim at sodales fringilla. Donec elementum nunc et massa sodales, at hendrerit eros mattis. Ut laoreet tristique volutpat. Ut sit amet quam gravida, pulvinar nulla a, eleifend sem. Donec ac lectus ultricies, mattis est eget, malesuada enim. Suspendisse placerat nisi ac arcu posuere, id tempus nunc imperdiet. Sed massa lacus, porta a venenatis eu, finibus sed mi. Donec ac vulputate magna. Nulla ac augue tincidunt, viverra justo ac, gravida augue. Aenean facilisis magna id consequat tincidunt. Morbi feugiat ex at pellentesque congue. Sed aliquam neque eget condimentum suscipit. \
// Vestibulum nec velit eget purus auctor condimentum ac eu mi. Ut lobortis purus in sem eleifend, sed bibendum enim finibus. Pellentesque ac erat luctus, sagittis augue venenatis, feugiat risus. Curabitur quis elementum sem, at lacinia sapien. Aenean laoreet mauris id nisl sagittis, nec posuere neque consectetur. In pellentesque, ipsum a blandit porttitor, turpis eros eleifend enim, ut tristique sem leo vel turpis. Nulla orci turpis, mollis vel tempus et, egestas eu enim. Pellentesque in commodo nunc. Phasellus blandit commodo lectus. Integer tincidunt augue tellus, et viverra dui tincidunt nec. Aliquam a ultricies neque, vel ullamcorper dui. Etiam vehicula risus quis diam tempus, non laoreet tortor aliquet. Fusce eu ultricies mi. Aliquam cursus, velit quis lobortis facilisis, urna turpis porttitor ex, vel lacinia nunc nisl ut neque. Cras ornare sit amet nisl nec dapibus. \
// Cras eu blandit elit. Aliquam eleifend est id dictum dignissim. Curabitur tempus, felis et feugiat molestie, libero mi dignissim risus, sed egestas orci massa vitae metus. Suspendisse consectetur augue et mi fringilla imperdiet. Vivamus ac eros sit amet lectus dapibus rutrum nec sed odio. Etiam pretium eu quam et accumsan. Cras faucibus rutrum ante, eget sodales purus. Fusce blandit eros mattis viverra gravida.', publishedDate: '2012-10-01T19:01:00.000Z' },
//     { id: 3, title: 'First Blog post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet sem quis sapien bibendum elementum. Maecenas a condimentum lacus. Praesent id dapibus mi. Mauris volutpat fermentum est quis laoreet. Nunc eget ipsum tellus. Maecenas eget rutrum sapien, at dignissim nulla. Vivamus et faucibus arcu, eget vulputate augue. Aenean faucibus venenatis enim a suscipit. Nulla commodo velit id maximus interdum. Nunc mollis purus arcu, a accumsan diam venenatis bibendum. \
// Pellentesque consequat in sapien eget mollis. Integer eu lectus vel eros ullamcorper vehicula quis in leo. Duis pharetra erat vel lectus imperdiet ullamcorper. In efficitur, mi a pretium facilisis, neque nibh aliquet mauris, eget bibendum arcu est ut mi. In maximus iaculis ante ut rutrum. Mauris urna purus, venenatis nec venenatis sit amet, hendrerit a leo. Aliquam scelerisque euismod arcu. Mauris sed eleifend neque. Sed fringilla mattis ullamcorper. Proin sagittis tristique lacus ut suscipit. Sed tincidunt sapien non dolor tempor, nec interdum ex pharetra. Integer tellus turpis, semper non libero a, convallis tincidunt nunc. \
// Nunc sollicitudin cursus ex et scelerisque. Vivamus id augue eu tortor fermentum semper. Ut interdum nisi id sem imperdiet mollis. Maecenas faucibus enim at sodales fringilla. Donec elementum nunc et massa sodales, at hendrerit eros mattis. Ut laoreet tristique volutpat. Ut sit amet quam gravida, pulvinar nulla a, eleifend sem. Donec ac lectus ultricies, mattis est eget, malesuada enim. Suspendisse placerat nisi ac arcu posuere, id tempus nunc imperdiet. Sed massa lacus, porta a venenatis eu, finibus sed mi. Donec ac vulputate magna. Nulla ac augue tincidunt, viverra justo ac, gravida augue. Aenean facilisis magna id consequat tincidunt. Morbi feugiat ex at pellentesque congue. Sed aliquam neque eget condimentum suscipit. \
// Vestibulum nec velit eget purus auctor condimentum ac eu mi. Ut lobortis purus in sem eleifend, sed bibendum enim finibus. Pellentesque ac erat luctus, sagittis augue venenatis, feugiat risus. Curabitur quis elementum sem, at lacinia sapien. Aenean laoreet mauris id nisl sagittis, nec posuere neque consectetur. In pellentesque, ipsum a blandit porttitor, turpis eros eleifend enim, ut tristique sem leo vel turpis. Nulla orci turpis, mollis vel tempus et, egestas eu enim. Pellentesque in commodo nunc. Phasellus blandit commodo lectus. Integer tincidunt augue tellus, et viverra dui tincidunt nec. Aliquam a ultricies neque, vel ullamcorper dui. Etiam vehicula risus quis diam tempus, non laoreet tortor aliquet. Fusce eu ultricies mi. Aliquam cursus, velit quis lobortis facilisis, urna turpis porttitor ex, vel lacinia nunc nisl ut neque. Cras ornare sit amet nisl nec dapibus. \
// Cras eu blandit elit. Aliquam eleifend est id dictum dignissim. Curabitur tempus, felis et feugiat molestie, libero mi dignissim risus, sed egestas orci massa vitae metus. Suspendisse consectetur augue et mi fringilla imperdiet. Vivamus ac eros sit amet lectus dapibus rutrum nec sed odio. Etiam pretium eu quam et accumsan. Cras faucibus rutrum ante, eget sodales purus. Fusce blandit eros mattis viverra gravida.', publishedDate: '2011-10-01T19:01:00.000Z' },
//     { id: 4, title: 'Third Blog post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet sem quis sapien bibendum elementum. Maecenas a condimentum lacus. Praesent id dapibus mi. Mauris volutpat fermentum est quis laoreet. Nunc eget ipsum tellus. Maecenas eget rutrum sapien, at dignissim nulla. Vivamus et faucibus arcu, eget vulputate augue. Aenean faucibus venenatis enim a suscipit. Nulla commodo velit id maximus interdum. Nunc mollis purus arcu, a accumsan diam venenatis bibendum. \
// Pellentesque consequat in sapien eget mollis. Integer eu lectus vel eros ullamcorper vehicula quis in leo. Duis pharetra erat vel lectus imperdiet ullamcorper. In efficitur, mi a pretium facilisis, neque nibh aliquet mauris, eget bibendum arcu est ut mi. In maximus iaculis ante ut rutrum. Mauris urna purus, venenatis nec venenatis sit amet, hendrerit a leo. Aliquam scelerisque euismod arcu. Mauris sed eleifend neque. Sed fringilla mattis ullamcorper. Proin sagittis tristique lacus ut suscipit. Sed tincidunt sapien non dolor tempor, nec interdum ex pharetra. Integer tellus turpis, semper non libero a, convallis tincidunt nunc. \
// Nunc sollicitudin cursus ex et scelerisque. Vivamus id augue eu tortor fermentum semper. Ut interdum nisi id sem imperdiet mollis. Maecenas faucibus enim at sodales fringilla. Donec elementum nunc et massa sodales, at hendrerit eros mattis. Ut laoreet tristique volutpat. Ut sit amet quam gravida, pulvinar nulla a, eleifend sem. Donec ac lectus ultricies, mattis est eget, malesuada enim. Suspendisse placerat nisi ac arcu posuere, id tempus nunc imperdiet. Sed massa lacus, porta a venenatis eu, finibus sed mi. Donec ac vulputate magna. Nulla ac augue tincidunt, viverra justo ac, gravida augue. Aenean facilisis magna id consequat tincidunt. Morbi feugiat ex at pellentesque congue. Sed aliquam neque eget condimentum suscipit. \
// Vestibulum nec velit eget purus auctor condimentum ac eu mi. Ut lobortis purus in sem eleifend, sed bibendum enim finibus. Pellentesque ac erat luctus, sagittis augue venenatis, feugiat risus. Curabitur quis elementum sem, at lacinia sapien. Aenean laoreet mauris id nisl sagittis, nec posuere neque consectetur. In pellentesque, ipsum a blandit porttitor, turpis eros eleifend enim, ut tristique sem leo vel turpis. Nulla orci turpis, mollis vel tempus et, egestas eu enim. Pellentesque in commodo nunc. Phasellus blandit commodo lectus. Integer tincidunt augue tellus, et viverra dui tincidunt nec. Aliquam a ultricies neque, vel ullamcorper dui. Etiam vehicula risus quis diam tempus, non laoreet tortor aliquet. Fusce eu ultricies mi. Aliquam cursus, velit quis lobortis facilisis, urna turpis porttitor ex, vel lacinia nunc nisl ut neque. Cras ornare sit amet nisl nec dapibus. \
// Cras eu blandit elit. Aliquam eleifend est id dictum dignissim. Curabitur tempus, felis et feugiat molestie, libero mi dignissim risus, sed egestas orci massa vitae metus. Suspendisse consectetur augue et mi fringilla imperdiet. Vivamus ac eros sit amet lectus dapibus rutrum nec sed odio. Etiam pretium eu quam et accumsan. Cras faucibus rutrum ante, eget sodales purus. Fusce blandit eros mattis viverra gravida.', publishedDate: '2014-10-01T19:01:00.000Z' }
//   ]
// });