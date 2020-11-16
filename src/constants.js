exports.PROGRAM_NAME = 'easygettext';

exports.DEFAULT_ATTRIBUTES = [
  't'
];

exports.DEFAULT_FILTERS = [
  't'
];

exports.DEFAULT_VUE_GETTEXT_FUNCTIONS = {
  '$t': ['msgid'],
  '$tn': ['msgid', 'plural', null],
  '$tp': ['msgctxt', 'msgid'],
  '$tnp': ['msgctxt', 'msgid', 'plural', null],
};

exports.DEFAULT_START_DELIMITER = '{{';
exports.DEFAULT_END_DELIMITER = '}}';

// Could for example be '::', used by AngularJS to indicate one-time bindings.
exports.DEFAULT_FILTER_PREFIX = null;

exports.DEFAULT_DELIMITERS = {
  start: '{{',
  end: '}}',
};

exports.ATTRIBUTE_COMMENT = 'comment';
exports.ATTRIBUTE_CONTEXT = 'context';
exports.ATTRIBUTE_PLURAL = 'plural';

exports.MARKER_NO_CONTEXT = '__NOCONTEXT__';
